import React from 'react'

const lists = [
  { name: 'Helder', age: 29, city: 'São Paulo' },
  { name: 'Mary', age: 46, city: 'São Paulo' },
  { name: 'Miguel', age: 3, city: 'São Paulo' },
  { name: 'Geovanna', age: 12, city: 'São Paulo' }
]

function List() {
  return (
    <React.Fragment>
      <table>
        {lists.map(list => (
          <tr>
            <td>{list.name}</td>
            <td>{list.age}</td>
            <td>{list.city}</td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  )
}

export default List
