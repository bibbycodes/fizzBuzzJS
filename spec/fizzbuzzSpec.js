describe("JavaBuzz",function() {
  var test;

  beforeEach(function(){
    test = new FizzBuzz

  })
  it("returns fizz when 3 is passed in", function() {

    expect(test.play(3)).toEqual("Fizz");
  })

  it("returns Buzz when 5 is passed in", function() {

    expect(test.play(5)).toEqual("Buzz");
  })

  it("returns fizz when a multiple of 3 is passed in", function() {

    expect(test.play(9)).toEqual("Fizz");
  })

  it("returns buzz when a multiple of 5 is passed in", function() {

    expect(test.play(10)).toEqual("Buzz");
  })

  it("returns fizzbuzz when a multiple of 3 and 5 is passed in", function() {

    expect(test.play(15)).toEqual("FizzBuzz");
  })

  it("returns input when not a multiple of 3 or 5", function() {

    expect(test.play(16)).toEqual(16);
  })







}
)
