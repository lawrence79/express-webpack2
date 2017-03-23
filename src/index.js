'use strict';

import textract from 'textract'
import nlp from 'compromise'

const indeedApi = require('indeed-jobs-api').getInstance('4047192740211228')

indeedApi.JobSearch()
  .Radius(20)
  .WhereLocation({
    city : "Stevens Point",
    state : "WI"
  })
  .Limit(2)
  .WhereKeywords(["Information Technology"])
  .SortBy("date")
  .UserIP("1.2.3.4")
  .UserAgent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36")
  .Search(
    function (results) {

  },
    function (error) {
    // do something with the error results
    console.log(error);
})

indeedApi.GetJob().WhereJobKeys(['ac25da5dda053f73']).Retrieve(
  function (results) {
    // do something with the success results
    console.log(results);
  },
  function (error) {
    // do something with the error results
    console.log(error);
  })

