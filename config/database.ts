import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: app.tmpPath('db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      pool: {
        afterCreate: (connection, done) => {
          connection.pragma('journal_mode = WAL')
          connection.pragma('foreign_keys = ON')

          // Now verify
          const journalMode = connection.pragma('journal_mode', { simple: true })
          const foreignKeys = connection.pragma('foreign_keys', { simple: true })

          console.log('Current journal_mode:', journalMode) // should be "wal"
          console.log('Are foreign_keys on?', foreignKeys) // should be 1

          done()
        },
      },
    },
  },
})

export default dbConfig
