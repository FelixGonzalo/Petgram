import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesDate () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-felixcastro.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesDate()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = (e) => {
        const nweShowFixed = window.scrollY > 200
        showFixed !== nweShowFixed && setShowFixed(nweShowFixed)
      }
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => {
    if (loading) {
      return (
        <List fixed={fixed}>
          {[1, 2, 3, 4].map((id) => (
            <Item key={`loader-${id}`}>
              <Category loading />
            </Item>
          ))}
        </List>
      )
    }

    return (
      <List fixed={fixed}>
        {
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
