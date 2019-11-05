import React from 'react'
import './select-dropdown.css'
import {map} from "react-bootstrap/esm/utils/ElementChildren";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0, 0, 3, 0),
        minWidth: '100%',
    }
}));


const SelectDropdown = ({id, label, list}) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    labelId={id}
                    value={age}
                    onChange={handleChange}
                >
                    {
                        list.map((item) => {
                            return (
                                <MenuItem value={item}>{item}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectDropdown;