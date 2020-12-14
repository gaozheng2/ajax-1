console.log('我是 main.js 2')

getCSS.onclick = () => {
  const request = new XMLHttpRequest() // readyState = 0
  request.open('GET', '/style.css') // readyState = 1
  request.onreadystatechange = () => {
    // readyState = 0（new）、1（open）、2（send）、3（开始下载）、4（下载完成）
    // console.log(request.readyState)
    if (request.readyState === 4) {
      // 根据返回的状态码判断请求是否成功
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement('style')
        // 填写 style 内容
        style.innerHTML = request.response
        // 将 style 插入到 head 中
        document.head.appendChild(style)
      } else {
        alert('加载 CSS 失败')
      }
    }
  }
  // request.onload = () => {
  //   // console.log(request.response)
  //   // 创建 style 标签
  //   const style = document.createElement('style')
  //   // 填写 style 内容
  //   style.innerHTML = request.response
  //   // 将 style 插入到 head 中
  //   document.head.appendChild(style)
  // }
  // request.onerror = () => {
  //   console.log('Fail!')
  // }
  request.send() // readyState = 2
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    // console.log(request.response)
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => {
    console.log('Fail!')
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        // 将符合 JSON 语法的字符串变成对应的对象
        const object = JSON.parse(request.response)
        console.log(object)
        myName.textContent = object.name
      }
    }
  }
  request.send()
}
let p = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${p + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const array = JSON.parse(request.response)
        array.forEach((item) => {
          const li = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        p += 1
      }
    }
  }
  request.send()
}
