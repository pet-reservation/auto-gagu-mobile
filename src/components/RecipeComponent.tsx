import { useState } from 'react';
import { usePurchases } from 'src/common/hook/usePurchases';
import { IRecipe } from 'src/interface/IRecipe';
import styled from 'styled-components';

export const RecipeComponent = () => {
  const [start, setStart] = useState(0);
  const limit = 10;
  const [ikeaId, setIkeaId] = useState('');

  const { data, isSuccess } = usePurchases(start, limit, ikeaId);
  if (isSuccess) {
    console.log(data);
  }
  return (
    <RecipeContainer>
      {data
        ? data.list.map((recipe: IRecipe) => {
            return (
              <RecipeWrap key={recipe.id}>
                <Recipe>
                  <span>
                    {new Intl.DateTimeFormat('kr', {
                      dateStyle: 'medium',
                    }).format(new Date(recipe.paymentTime))}{' '}
                  </span>
                  <span>/ {recipe.tag}</span>
                </Recipe>
                <Recipe>
                  <span>{recipe.storeName} </span>
                  <span>/ {recipe.paymentAmount}</span>
                </Recipe>
              </RecipeWrap>
            );
          })
        : ''}
    </RecipeContainer>
  );
};

const RecipeContainer = styled.div`
  padding: 0px 20px;
`;

const Recipe = styled.div`
  padding: 10px 20px;
  width: 100%;
`;

const RecipeWrap = styled.div`
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  cursor: pointer;
  padding: 5px 0px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
`;
