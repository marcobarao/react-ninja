'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', gulp.series(['lint']))
})

gulp.task('default', gulp.series(['lint', 'watch']))
