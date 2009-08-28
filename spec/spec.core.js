
describe 'jQuery'
  describe '$.poll()'
    it 'should default to polling each second'
      var hits = 0
      $.poll(function(retry){
        ++hits
        retry()
      })
      hits.should.eql 0
      tick(1000)
      hits.should.eql 1
      tick(1500)
      hits.should.eql 2
      tick(3000)
      hits.should.eql 3 
    end
    
    it 'should allow setting interval'
      var hits = 0
      $.poll(2000, function(retry){
        ++hits
        retry()
      })
      hits.should.eql 0
      tick(2000)
      hits.should.eql 1
      tick(3000)
      hits.should.eql 2
      tick(4500)
      hits.should.eql 3 
      //tick(8000)            FIX JSpec error
      //hits.should.eql 5 
    end
  end
end