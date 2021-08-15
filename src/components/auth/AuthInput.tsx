

type AuthProps = {
    title: string;
    value: any;
    required?:boolean;
    type?: 'text' | 'password' | 'email';
    changedValue: (newValue: any ) => void;
}

export default function AuthInput({ title, value, type , required , changedValue }: AuthProps) {
    return (
        <div>
            <label className="px-1">{ title }</label>
            <input 
                type={ type }
                value={ value }
                onChange={e => changedValue?.(e.target.value)}
                required={ required }

                className={`
                    px-4 py-1 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white 
                    focus:outline-none 
                `}
            />
        </div>
    )
}