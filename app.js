const {PrismaClient} =   require('@prisma/client')

const prisma = new PrismaClient()

async function main(){

     //Crear un contacto.

   const contacto =   await prisma.contacto.createMany({

     data: [

         {

             nombre: 'mauricio',
             apellido: 'saenz',
             idinformacion: 1

         },
         {

             nombre: 'andrea',
             apellido: 'cadavid',
             idinformacion: 2

         }

     ]

     })

//     console.log(contacto)


//Mostrar todos los registro.

 
//  const all =  await prisma.contacto.findMany()

// console.log(all)


//Mostrar un registro.

// const one = await prisma.contacto.findUnique({

//     where: {

//         id_Contacto:2
//     }

// })

// console.log(one)


// Editar un registro

// const edit = await prisma.contacto.update({

//     where: {

//         id_Contacto: 3,

//     }, 
//     data: {

//         id_informacion: 3,

//     }



// })

// console.log(edit)

//Eliminar un registro.

 const dl =  await prisma.contacto.delete({

    where: {


        id_Contacto: 2

    }


})
console.log(dl)

}

main()
     .catch((e) => {

        throw e


     })
        .finally(async () => {

            await prisma.$disconnect()

        })