import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 0.25em 1em;
  cursor: pointer;
  margin-left: 10px;
`;

export const Delete = styled(MdDelete)`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: red;
  }
`;

export const Edit = styled(MdEdit)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #0000ff;
  }
`;
