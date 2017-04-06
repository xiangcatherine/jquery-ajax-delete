'use strict'

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onDeleteSuccess = function (data) {
  console.log('the book was deleted!')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess
}
