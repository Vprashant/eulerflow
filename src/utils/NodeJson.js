let json_data = [];

export const generateJsonData = (id, data, inputs) => {
    const new_json_data = data.inputs.length === Object.keys(inputs).length
        ? { node:id, type:data.type, id:data.id, name: data.name, inputs: inputs }
        : null;

    if (new_json_data !== null) {
        json_data.push(new_json_data);
    }
    return json_data; 
};

export {json_data};