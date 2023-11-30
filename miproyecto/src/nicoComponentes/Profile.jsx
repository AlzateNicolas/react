import React from 'react'
const user = {
    name: 'Juan Doe',
    ImagenUrl: 'src\\assets\\img\\leon.jpeg',
    ImageSize:90

};


export default function Profile() {
  return (
    <div>
        <h1>{user.name}</h1>
       
        <img 
          className="avatar"
        src={user.ImagenUrl}
        alt={'Photo of ' + user.name}
        style={{
            width:user.ImageSize,
            height:user.ImageSize
        }}
        />

    </div>
  )
}
