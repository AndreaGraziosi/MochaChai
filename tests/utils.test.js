const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it('area should equal w*h', function() {
  const  width=2, height=2, area = utils.area(width, height)
  expect (width).to.be.a('number')
  expect(height).to.be.a('number')
  expect(area).to.be.a('number')
  expect(area).to.be.equal(width * height)

})
it("perimeter should equal 2w + 2h", function() {
  const width = 11, height = 15, peri = utils.perimeter(width, height)

  expect(width).to.not.be.a('null')
  expect(width).to.be.a('number')
  expect(height).to.be.a('number')
  expect(peri).to.be.a('number')
  expect(peri).to.equal(2*width + 2*height)
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
})

it("Should add a new item to the shopping cart", function() {
  
  expect("apple").to.be.a("string")
  expect(0.99).to.be.a("number")

  const cart = utils.getShoppingCart(),
  item = utils.createItem("apple", 0.99),
  prevCartSize = cart.length

  expect(cart).to.be.a("array")
  expect(item).to.be.a("object")
  utils.addItemToCart(item)

  const newCart = utils.getShoppingCart()

  expect(newCart).to.be.a("array")
  expect(newCart.length).to.equal(prevCartSize + 1)
})

it("Should return the number of items in the cart", function() {
  const item = utils.getNumItemsInCart()
 
})

it("Should remove items from cart", function() {
  const item = utils.removeItemFromCart()
 
})
//check length what the array is like before and after
// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
