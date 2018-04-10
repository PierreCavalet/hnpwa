import Firebase from 'firebase/app'
import 'firebase/database'

Firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com'
})

const api = Firebase.database().ref('/v0')

function fetch(child) {
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      resolve(snapshot.val())
    })
  })
}

export function fetchIdsByType(list) {
  return fetch(list)
}

export function fetchItems(ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchItem(id) {
  return fetch(`item/${id}`)
}
