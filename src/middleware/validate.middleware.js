const validate = (schema) => {
    return (req, res, next) => {
        const body = req.body
        const valid = schema.safeParse(body)

        if (!valid.success){
            const errorMessage = valid.error.issues.map( (issue) => issue.message ).join(' | ')
            return res.status(400).json({
                success : false,
                error : errorMessage
            })
        }
        next()
    }
}

export default validate