import React, { useState, useEffect } from 'react';

  const SearchJobs = () => {
    // const [locField, setLoc] = useState('')
    const [keyword, setKeyword] = useState('')

    const searchByKeyword = () => {

    }

    return (
      <>
      <div >Input keyword</div>
        <div >
            <div >
                <form onSubmit={searchByKeyword} >
                    <input type="text"
                    placeholder="keyword"
                    name="job" />
                    <button >Search</button>
                </form>

          </div>
      </div>

  </>
    )
  }

  export default SearchJobs;