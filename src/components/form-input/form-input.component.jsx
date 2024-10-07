import {Group, FormInputLabel, Input} from './from-input.styles';

const FromInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>)}                  
        </Group>
    );
  };
  export default FromInput;