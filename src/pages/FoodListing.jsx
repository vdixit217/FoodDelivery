
import React from 'react';
import styled from 'styled-components';
import ProductsCard from '../components/Cards/ProductsCard.jsx';


const Container = styled.div`
padding: 20px 30px ;
padding-bottom: 200px;
height: 100%;
width: 100%;
overflow-y: scroll;
display: flex;
flex-direction: row;
gap: 30px;
@media (max-width: 700px) {
  padding: 10px 15px ;
  flex-direction: column;
}
`;

const Filters = styled.div`
  padding: 20px 16px;
  flex: 1;
  width: 100%;
  max-width: 300px;
  @media (max-width: 700px) {
    max-width: 440px;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Products = styled.div`
  flex: 1;
  padding: 20px 0px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SelectableItems = styled.div`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary + "40"};
  color: ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  padding: 2px 8px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  width: fit-content;

  ${({ selected, theme }) =>
    selected && `
      border: 1px solid ${theme.text_primary};
      background: ${theme.text_primary + "20"};
      color: ${theme.white};
      font-weight: 500;
    `}
`;


const FoodListing = () => {
  return (
    <Container>
      FoodListing

      <Filters>
        <Menu>
          {filter.map((filters, index) => (
            <FilterSection key={index}>
              <Title>{filters.name}</Title>

              {filters.value === "price" ? (
                <Slider
                  aria-label="Price"
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                  marks={[
                    { value: 0, label: "$0" },
                    { value: 250, label: "$250" },
                    { value: 500, label: "$500" },
                    { value: 750, label: "$750" },
                    { value: 1000, label: "$1000" },
                  ]}
                />
              ) : filters.value === "category" ? (
                <Item>
                  {filters.items.map((item, idx) => (
                    <SelectableItems key={idx}>
                      {item}
                    </SelectableItems>
                  ))}
                </Item>
              ) : filters.value === "cuisine" ? (
                <Item>
                  {filters.items.map((item, idx) => (
                    <SelectableItems key={idx}>
                      {item}
                    </SelectableItems>
                  ))}
                </Item>
              ) : null}
            </FilterSection>
          ))}
        </Menu>
      </Filters>

      <Products>
        <CardWrapper>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <ProductsCard key={index} />
          ))}
        </CardWrapper>
      </Products>
    </Container>
  );

};


export default FoodListing;