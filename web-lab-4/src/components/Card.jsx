import { useState, useEffect } from 'react';
function ExpCard({name, discrpt, status}) {


	return (
    <div style={{
		border: '2px solid #1e1e1e',
		padding: '10px',
		display: 'flex',
		width: '550px',
		height: '20px',
		flexDirection: 'row',
		borderRadius: '8px',
		fontFamily: 'Bahnschrift',
		color: 'black',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: "#e3e7ef"
	}}>
		<h4 style={{ margin: 0 }}>{name}</h4>
		<p style={{ margin: 0, textAlign: 'left'}}>{discrpt}</p>
		<p style={{margin: 0, textAlign: 'left'}}>{status}</p>

    </div>
  );
}

export default ExpCard;