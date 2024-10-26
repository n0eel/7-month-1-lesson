import { Button } from 'antd'
import './App.css'
import UsersItem from './components/UsersItem'
import { useFetch } from './hooks/useFetch'
import { useEffect, useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "liked": 
      action.payload.isLiked = true 
      if(!state.liked.includes(action.payload)){
        return {
          liked: [...state.liked, action.payload],
          saved: state.saved
        }
      }
      else {
        return {
          liked: state.liked,
          saved: state.saved
        }
      }

      case "saved": 
      action.payload.isSaved = true 
      if(!state.saved.includes(action.payload)){
        return {
          liked: state.liked,
          saved: [...state.saved, action.payload]
        }
      }
      else {
        return {
          liked: state.liked,
          saved: state.saved
        }
      }


      default : 
        return {
          liked: state.liked,
          saved: state.saved
        }
  }
}

const intialState = {
  liked: [],
  saved: []
}

function App() {
  const {users} = useFetch("/users")
  const [usersData, setUsersData] = useState([])
  const [products, dispatch] = useReducer(reducer, intialState)

  useEffect(() => {
    setUsersData(users)
  }, [users])

  return (
    <>
    <div className='flex items-center p-10 space-x-5'>
      <Button onClick={() => setUsersData(products.liked)}>Liked ({products.liked.length})</Button>
      <Button onClick={() => setUsersData(products.saved)}>Saved ({products.saved.length})</Button>
    </div>

    <div className='px-10 flex justify-between flex-wrap gap-10'>
      {usersData ? usersData.map((item => <UsersItem handleLikedBtnClick={() => dispatch({type:"liked", payload:item})} handleSavedBtnClick={() => dispatch({type:"saved", payload:item})} dispatch={dispatch} item={item} key={item.id}/>)) : ""}
    </div>
    </>
  )
}

export default App
