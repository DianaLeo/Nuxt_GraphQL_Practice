<script setup lang="ts">
  import getProducts from '~/queries/product.gql'

  const { data  } = await useAsyncQuery(getProducts)
  const { data: NameOnly} = await useAsyncQuery(gql`
    query getProducts {
        products {
            productName
        }
    }
  `)

  const useQueryData = ref()
  function handleClick (){
    console.log("clicked")
    const query = gql`
      query getStarships {
        starships(first: 2) {
          name
        }
      }
    `
    const { result } = useQuery(query)
    console.log("useQuery data=",result)
    useQueryData.value = result
  }
  // const { mutate, error:postErr, called:postCalled } = useMutation(gql`
  //   mutation Create {
  //     createProduct(data:{productName:"pear",productSlug:"pear"}){
  //       productName
  //     }
  //   }
  // `)
  // const {data:Response}=await mutate()

</script>


<template>
  <div>
    <ProjectHeader/>

    <div class="w-full h-56 bg-blue-50">
      <p>useAsyncQuery with query from a file: {{ data }}</p>
    </div>
    <div class="w-full h-56 bg-blue-50">
      <p>useAsyncQuery with gql: {{ NameOnly }}</p>
    </div>
    <div class="w-full h-56 bg-blue-50">
      <button class="bg-blue-400 rounded-md h-10 w-20" @click="handleClick">UseQuery</button>
      <p>useQueryData: {{ useQueryData }}</p>
    </div>
<!--    <div class="w-full h-56 bg-blue-50">-->
<!--      <p>useMutation: {{ Response }}</p>-->
<!--      <p>useMutation: {{ postErr }}</p>-->
<!--      <p>useMutation: {{ postCalled }}</p>-->
<!--    </div>-->
  </div>
</template>
