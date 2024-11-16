const reducer = (state, action) => {
    //if(action.type="s") pehle if se karna hota tha ki konsa data hain like humara GET_STORIES hain to yaha woh likhna hota lekin an switch se hojata hain 
    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            };

        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages,
            }

            case "REMOVE_POST":
           return {
              ...state,
              hits: state.hits.filter(
             (curElem) => curElem.objectID !== action.payload
        ),
      };

      case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

      case "NEXT_PAGE":
        let pageNumInc = state.page + 1;
        
        if(pageNumInc >= state.nbPages){
            pageNumInc = 0;    // by default +1 ho jayega pagination page main jo page+1 kiya hain usse 
        }

        return {
            ...state,
            page: pageNumInc,
        }

        case "PREV_PAGE":
            let pageNum = state.page - 1;
      
            if (pageNum <= 0) {
              pageNum = 0;
            }
      
            return {
              ...state,
              page: pageNum,
            };
    }


   return state;
};

export default reducer;