import React, { FunctionComponent } from 'react';
import { StyleSheet, TextStyle, TouchableWithoutFeedback, View, ViewProps, ViewStyle } from 'react-native';
import Icon from './iconfont/Icon';
import { UIText } from '@rnui/text';

interface Props extends ViewProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  size?: number;
  checkedIconColor?: string;
  uncheckIconColor?: string;
  checkedTextColor?: string;
  uncheckTextColor?: string;
  titleStyle?: TextStyle;
  iconStyle?: ViewStyle;
}

export const UICheckbox: FunctionComponent<Props> = (props) => {
  const {
    checked, onChange, style,
    title, titleStyle, checkedTextColor, uncheckTextColor,
    iconStyle, size, checkedIconColor, uncheckIconColor,
    ...rest
  } = props;

  return (
    <TouchableWithoutFeedback onPress={() => onChange(!checked)}>
      <View style={[styles.container, style]} {...rest}>
        <Icon
          name={checked ? 'checked' : 'uncheck'}
          color={checked ? checkedIconColor : uncheckIconColor}
          size={size}
          style={[styles.icon, iconStyle]}
        />
        <UIText
          color={checked ? checkedTextColor : uncheckTextColor}
          size={size}
          style={titleStyle}
        >
          {title}
        </UIText>
      </View>
    </TouchableWithoutFeedback>
  );
};

UICheckbox.defaultProps = {
  size: 14,
};

interface Styles {
  container: ViewStyle;
  icon: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
