import { InputText } from 'primereact/inputtext';

export default function C_TextField({ ...props }) {

    return (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText {...props} />
        </span>
    )
}