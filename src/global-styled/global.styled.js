import styled from 'styled-components/native';

// Container Row and Column

const Ant_FlexWrap = styled.View`
  display: flex;
  align-items: ${(props) => props.ai || 'stretch'};
  justify-content: ${(props) => props.jc || 'flex-start'};
  align-content: ${(props) => props.ac || 'stretch'};
  align-self: ${(props) => props.asf || 'auto'};

  padding: ${(props) => props.p || '0 0 0 0'};
  margin: ${(props) => props.m || '0 0 0 0'};

  width: ${(props) => props.w || 'auto'};
  height: ${(props) => props.h || 'auto'};

  border-radius: ${(props) => props.brs || '0px'};

  background: ${(props) => props.bg || '#ffffff00'};

  border: ${(props) => props.bdr || '1px solid #ffffff00'};
`;

export const Ant_FlexScrolWrap = styled.ScrollView`
  padding: ${(props) => props.p || '0 0 0 0'};
  margin: ${(props) => props.m || '0 0 0 0'};

  width: ${(props) => props.w || 'auto'};
  height: ${(props) => props.h || 'auto'};

  border-radius: ${(props) => props.brs || '0px'};

  background: ${(props) => props.bg || '#ffffff00'};

  border: ${(props) => props.bdr || '1px solid #ffffff00'};
`;
const Ant_FlexWrapPress = styled.TouchableOpacity`
  display: flex;
  align-items: ${(props) => props.ai || 'stretch'};
  justify-content: ${(props) => props.jc || 'flex-start'};
  align-content: ${(props) => props.ac || 'stretch'};
  align-self: ${(props) => props.asf || 'auto'};

  padding: ${(props) => props.p || '0 0 0 0'};
  margin: ${(props) => props.m || '0 0 0 0'};

  width: ${(props) => props.w || 'auto'};
  height: ${(props) => props.h || 'auto'};

  border-radius: ${(props) => props.brs || '0px'};

  background: ${(props) => props.bg || '#ffffff00'};

  border: ${(props) => props.bdr || '1px solid #ffffff00'};
`;

export const Ant_FlexColumnWrap = styled(Ant_FlexWrap)`
  flex-direction: column;
`;

export const Ant_FlexRowWrap = styled(Ant_FlexWrap)`
  flex-direction: row;
`;

export const Ant_FlexRowWrapPress = styled(Ant_FlexWrapPress)`
  flex-direction: row;
`;

export const Ant_FlexColumnWrapPress = styled(Ant_FlexWrapPress)`
  flex-direction: column;
`;

// Image Icon

export const Ant_IconImage = styled.Image`
  width: ${(props) => props.w || '50'}px;
  height: ${(props) => props.h || '50'}px;
  border-radius: ${(props) => props.brs || '0px'};
`;
