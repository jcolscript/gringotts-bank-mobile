import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #3b3a40;
  /* padding-top: ${getStatusBarHeight()}px; */
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 380px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 20px 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #444;
`;

export const CardFooter = styled.View`
  padding: 20px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  margin-left: 5px;
`;
