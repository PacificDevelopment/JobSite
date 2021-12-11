import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

  const SearchJobs = () => {
    // const [locField, setLoc] = useState('')
    const [keyword, setKeyword] = useState('')
    

    const searchByKeyword = () => {

    }

    return (
      <>
      <div >Weather Info</div>
        <div >
            <div >
                <form onSubmit={searchByKeyword} >
                    <input type="text"
                    placeholder="keyword"
                    name="job" />
                    <button >Search</button>
                </form>
              {weather && <Weath />}
          </div>
      </div>
  </>
    )
  }

  export default SearchJobs;