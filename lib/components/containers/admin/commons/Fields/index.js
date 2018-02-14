export * from './GalleryField';
export * from './MapField';
export * from './UploadField';


import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';

export const CheckField = styled(Checkbox)`
    margin: 20px 0px;
`;

export const FieldTitle = styled.div`
    margin: 20px 0px;
    font-size: 15px;
    font-weight: bold;
    color: #6f6f6f;
`;

export const ShapeOptionsWrapper = styled.div`
    margin: 10px;
    
`;
export const ShapeListWrapper = styled.div`
display: flex;

`;

