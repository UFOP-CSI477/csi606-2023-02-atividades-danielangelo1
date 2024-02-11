import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router