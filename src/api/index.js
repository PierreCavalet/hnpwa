import Firebase from 'firebase/app'
import 'firebase/database'

Firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com'
})

const api = Firebase.database().ref('/v0')

export function fetchIdsByType(list) {
  return new Promise((resolve, reject) => {
    api.child(list).once('value', snapshot => {
      resolve(snapshot.val())
    })
  })
}
