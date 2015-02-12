describe("numbersInWords", function() {

  it('returns 0 in words', function() {
    expect(numbersInWords(0)).to.equal("zero");
  });

  it('returns 19 in words', function() {
    expect(numbersInWords(19)).to.equal("nineteen");
  });

  it('returns 21 in words', function() {
    expect(numbersInWords(21)).to.equal("twenty one");
  });

  it('returns 100 in words', function() {
    expect(numbersInWords(100)).to.equal("one hundred");
  });

  it('returns 204 in words', function() {
    expect(numbersInWords(204)).to.equal("two hundred four");
  });

  it('returns 221 in words', function() {
    expect(numbersInWords(221)).to.equal("two hundred twenty one");
  });

  it('returns 10000 in words', function() {
    expect(numbersInWords(10000)).to.equal("ten thousand");
  });

  it('returns 11221 in words', function() {
    expect(numbersInWords(11221)).to.equal("eleven thousand two hundred twenty one");
  });

  it('returns 20000 in words', function() {
    expect(numbersInWords(20000)).to.equal("twenty thousand");
  });

  it('returns 200000 in words', function() {
    expect(numbersInWords(200000)).to.equal("two hundred thousand");
  });

  it('returns 21221 in words', function() {
    expect(numbersInWords(21221)).to.equal("twenty one thousand two hundred twenty one");
  });

  it('returns 1000000 in words', function() {
    expect(numbersInWords(1000000)).to.equal("one million");
  });

  it('returns 1122100 in words', function() {
    expect(numbersInWords(1122100)).to.equal("one million one hundred twenty two thousand one hundred");
  });

  it('returns 2000000 in words', function() {
    expect(numbersInWords(20000000)).to.equal("twenty million");
  });

  it('returns 21221 in words', function() {
    expect(numbersInWords(212210000)).to.equal("two hundred twelve million two hundred ten thousand");
  });

});
