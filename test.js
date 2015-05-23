var expect = require('chai').expect
  , send = require('./')
  
describe('all', function() {

  it('should call res.sendfile with path', function(){
    var fn = function(path){ result = path; }
      , res = { sendfile: fn }
      , result 

    send('sth')({}, res)
    expect(result).to.eql('sth')
  })
  
})