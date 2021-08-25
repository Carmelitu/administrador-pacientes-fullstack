import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Cita = (props) => {

    const {cita} = props;

    if(!cita){
        props.history.push('/');
        return null;
    }

    return ( 
        <Fragment>
            <h1 className='my-5'>Nombre cita: {cita.nombre}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                            <h3 className="mb-3">{cita.nombre}</h3> 
                                            <small className="fecha-alta">{cita.fecha} - {cita.hora}</small>
                                        </div>
                                        <p className="mb-0">{cita.sintomas}</p>
                                        <div className="contacto py-3">
                                            <p>Dueño: {cita.propietario}</p>
                                            <p>Telefono: {cita.telefono}</p>
                                    </div>
                                    <div className="">
                                        <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col">
                                            Eliminar &times;
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        );
}
 
export default withRouter(Cita);