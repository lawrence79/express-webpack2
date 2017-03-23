'use strict';

import textract from 'textract'
import nlp from 'compromise'


textract.fromFileWithPath('./resumes/resume-2.pdf', ( error, text ) => {
  let r = nlp(text)
  let topics = r.topics()
  console.log(topics.out('array'))
})
