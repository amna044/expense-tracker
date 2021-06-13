export const initalState={
    basket:[],
    user:[]
    //Redux
    //input
} 
export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price+amount,0);

export const reducer = (state,action) => {
    // console.log(action,state);
  switch(action.type)
  {
      case 'Add_to_cart':
          return {
              ...state ,
               basket: [...state.basket,action.item]
        };
      break;
      case 'Remove_from_cart':
        const newBasket=[...state.basket];
        // const filter=state.basket.filter(
        //   (b=>b.id!==action.id)
        // )
        const index=state.basket.findIndex(
          (basketItem)=>basketItem.id===action.id
        );
        if(index>=0)
        {
          newBasket.splice(index,1);
        }
        else{
          console.warn('Can not find');
        }
        return {
          ...state,basket:newBasket,
        }
        case 'Delete_All' :
            return {...state,basket:[]}

      break;
        default:
            return state;
    }
}
 
