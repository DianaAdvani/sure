import React,{useState, useEffect} from 'react';
import {updateQuote} from '../api/sureAPI';
import {Button, Box, Card, CardContent, CardActions, Typography, Select, MenuItem} from '@material-ui/core/';
import './QuoteOverview.css';


function QuoteOverview(props) {
    const [mutableQuote, setMutableQuote] = useState({
        "quoteId": new String(props.quoteData.quote.quoteId),
        "rating_address": {...props.quoteData.quote.rating_address},
        "policy_holder": {...props.quoteData.quote.policy_holder},
        "variable_selections": {...props.quoteData.quote.variable_selections} 
    });

    useEffect( () => {
    }, [props.quoteData]
    );

    function handelSelect(e, type) {
        e.persist();
        var selection = parseInt(e.target.value);
        if (selection !== NaN) {
            var copy = {...mutableQuote};
            copy.variable_selections[type] = selection;
            setMutableQuote(copy);
            updateQuote({"quote": copy}).then(res => {
                if (res !== null) {
                    props.updateQuote(res.data);
                }
            })
        }
    }

    function renderDropdown(type) {
        if (props.quoteData.quote.variable_options[type] !== null) {
            return (
                <Card className="card">
                    <CardContent>
                        <Typography variant="h5" >
                            {props.quoteData.quote.variable_options[type].title}
                        </Typography>
                        <Typography variant="body2" >
                            {props.quoteData.quote.variable_options[type].description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Select className="select"
                        fullWidth
                        name={props.quoteData.quote.variable_options[type].values} 
                        id={props.quoteData.quote.variable_options[type].values} 
                        onChange={(e) => handelSelect(e, type)} 
                        value={mutableQuote.variable_selections[type]}
                        >
                        {props.quoteData.quote.variable_options[type].values.map( (i) => <MenuItem value={i}>${i}</MenuItem>)}
                        </Select>
                    </CardActions>
                </Card>
            )
        }
        return <div> An error occurred</div>;
    }

    return (
        <div className="display-quote">
            
            <div className="drop-downs">
                {renderDropdown("asteroid_collision")}
                {renderDropdown("deductible")}
            </div>
            <Card className="card">
                <CardContent> Premium : $ {props.quoteData.quote.premium} </CardContent>
            </Card>
        </div>
    )
}

export default QuoteOverview;