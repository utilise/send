var expect = require('chai').expect
  , send = require('./')
  
describe('send', function() {

  it('should call res.sendFile with path', function(){
    var fn = function(path){ result = path; }
      , res = { sendFile: fn }
      , result 

    send('sth')({}, res)
    expect(result).to.eql('sth')
  })
  
})