require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
const port = 3000

const  githubData = {
  "login": "amitkr79",
  "id": 100353838,
  "node_id": "U_kgDOBftHLg",
  "avatar_url": "https://avatars.githubusercontent.com/u/100353838?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/amitkr79",
  "html_url": "https://github.com/amitkr79",
  "followers_url": "https://api.github.com/users/amitkr79/followers",
  "following_url": "https://api.github.com/users/amitkr79/following{/other_user}",
  "gists_url": "https://api.github.com/users/amitkr79/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/amitkr79/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/amitkr79/subscriptions",
  "organizations_url": "https://api.github.com/users/amitkr79/orgs",
  "repos_url": "https://api.github.com/users/amitkr79/repos",
  "events_url": "https://api.github.com/users/amitkr79/events{/privacy}",
  "received_events_url": "https://api.github.com/users/amitkr79/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Amit Kumar",
  "company": null,
  "blog": "https://mobile.twitter.com/amitkumar5376",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hii it's me Amit Kumar from Ranchi Jharkhand...I have keen interest in coding.",
  "twitter_username": "Amitkumar5376",
  "public_repos": 13,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-02-24T11:39:54Z",
  "updated_at": "2023-11-09T05:45:40Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' ,(req , res) => {
    res.send('amit76')
})

app.get('/login' , (req , res) => {
    res.send('<h1>Please loging at chai aur code </h1>')
})

app.get('/youtube' , (req , res) => {
    res.send('<h2> chai aur code </h2>')
})

app.get('/github' , (req , res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})