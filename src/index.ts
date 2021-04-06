import isOdd from 'is-odd'

// In order for our ES6 shim to find the class, we must export it
// from the root of the CommonJS bundle
export {Counter} from './counter'


export const handlers = {
  async fetch(request, env) {
    console.log(request)
    try {
      return await handleRequest(request, env)
    } catch (e) {
      return new Response(e.message)
    }
  },
}

async function handleRequest(request, env) {
  let id = env.COUNTER.idFromName('A')
  let obj = env.COUNTER.get(id)
  let resp = await obj.fetch(request.url)
  let count = parseInt(await resp.text())
  let wasOdd = (count%2 === 0) ? 'is odd' : 'is even'

  return new Response(`${count} ${wasOdd}`)
}
