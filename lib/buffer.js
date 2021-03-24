const fetch = require('node-fetch')
const fs = require('fs')
const axios = require('axios')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const { JSDOM } = require('jsdom')

const getBuffer = async (url, options) => {
console.log(`Buffer : ${url}`)
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const json = async (url, method) => {
res = await fetch(url, method)
hasil = await res.json()
console.log(hasil)
return hasil
}

const processTime = (timestamp, now) => {
    // timestamp => timestamp when message was received
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}
const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

const shortlink = (url, options) => new Promise(async (resolve, reject) => {
    fetch(`https://tinyurl.com/api-create.php?url=${url}`, options)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

const urlpendek = (url, options) => new Promise(async (resolve, reject) => {
    fetch(`http://urlpendek.com/?url=${url}`, options)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

const bitly = (url, options) => new Promise(async (resolve, reject) => {
res = await fetch(`https://tobz-api.herokuapp.com/api/bitly?url=${url}&apikey=${tobzkey}`, options)
hasil = await res.json()
console.log(hasil.result)
resolve(hasil.result)
})

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}

module.exports = { stylizeText, urlpendek, bitly, getBuffer, json, processTime, h2k, shortlink, fetchText }