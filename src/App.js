import React, {useState, useEffect, useRef} from 'react';
import {quotePost} from './api/sureAPI.js';
import RatingIntake from './components/RatingIntake';
import QuoteOverview from './components/QuoteOverview';


function App() {
  const [quote, setQuote] = useState({"premium" : 0, "variable_options" : [], "variable_selections" : {}});
  const [showQuoteOverview, setShowQuoteOverview] = useState(false);
  
  const initialMount = useRef(false);

  useEffect(() =>
   {
     if (initialMount.current) {
      setShowQuoteOverview(true)
    } else {
      initialMount.current = true;
   }},[quote]
  );

  function submit(first_name, last_name, address) {
    var data = {"first_name": first_name, "last_name": last_name, "address": address}
    quotePost(data).then(res => {
        setQuote(res.data);
      }
    );
  }
  
  return (
    <div className="App">
      {(showQuoteOverview) ? <QuoteOverview quoteData={quote} updateQuote={setQuote}/> : <RatingIntake onSubmit={submit}/>}
    </div>
  );
}

export default App;
