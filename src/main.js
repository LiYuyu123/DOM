//let div=document.createElement("div")
const div=dom.create("<div>new</div>")
console.log(div)
dom.before(kw,div)
const div2=dom.create("<span>1</span>")
dom.wrap(li,div2)
console.log(dom.empty(window.empty))
dom.attr(kw,"title","li")
const title=dom.attr(kw,"title")

console.log(`title:${title}`)

dom.text(kw,"傻逼鱼鱼")
console.log(dom.text(kw))
dom.html(kv,"<h1>sb</h1><p>ddddddddd</p>")
console.log(dom.html(kv))
dom.style(kw,"border","1px solid red")
dom.style(kv,{border:"1px solid red",color:"blue"})
console.log(dom.style(kc,"border"))

dom.class.add(kv,'red')
dom.class.add(kv,'blue')
dom.class.remove(kv,'blue')
console.log(dom.class.has(kv,'blue'))

const fn=()=>console.log('点击了')
dom.on(kv,'click',fn)
dom.off(kv,'click',fn)

console.log(dom.find('#kw')[0])

console.log(dom.find('#kw')[0])
const s2=dom.find("#t2")[0]
console.log(dom.siblings(dom.find("#t2")[0]))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t=dom.find("#yu")[0]
console.log(dom.each(dom.children(t),(n)=>dom.style(n,"color","red")))

console.log(dom.index(dom.find("#jie")[0]))


console.log(dom.children(dom.find('html')[0]))