import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArithOP {
    public async add(ctx:HttpContextContract){
        const{n1,n2}=ctx.request.qs()
        // console.log(ctx.request.qs());
        return parseInt(n1)+parseInt(n2)
    }
    public async sub(ctx:HttpContextContract){
        const{n1,n2}=ctx.request.qs()
        return parseInt(n1)-parseInt(n2)
    }
    public async mul(ctx:HttpContextContract){
        const{n1,n2}=ctx.request.qs()
        return parseInt(n1)*parseInt(n2)
    }
    public async div(ctx:HttpContextContract){
        const{n1,n2}=ctx.request.qs()
        return parseInt(n1)/parseInt(n2)
    }
}
