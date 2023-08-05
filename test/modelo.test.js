const { sum } = require('./calculations.js')
const {generate,request } =require('./utility.js')
test('Teste Base de soma dois Numeros e Request a uma Pagina', async () => {
  const response =await request("https://www.geeksforgeeks.org/node-js-crypto-randombytes-method","get")
  expect(response.status).toBe(200)
  expect(sum(200,500)).toBe(700)
})


 