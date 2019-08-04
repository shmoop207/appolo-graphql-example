import {Resolver, FieldResolver, Root, Query, Register,Arg} from "@appolo/graphql";
import {define, singleton, inject} from "appolo";
import {Car} from "../cars/car";
import {CarRepository} from "../cars/carRepository";
import {Owner} from "../owners/owner";
import {OwnerRepository} from "../owners/ownerRepository";
import {Service} from "./service";
import {ServiceRepository} from "./serviceRepository";


@Resolver(of => Service)
@Register()
@singleton()
export class ServiceResolver {

    @inject() ownerRepository: OwnerRepository;
    @inject() carRepository: CarRepository;
    @inject() serviceRepository: ServiceRepository;

    @Query(returns => [Service])
    public async services(): Promise<Service[]> {
        let {results} = await this.serviceRepository.getAll({lean: true});

        return results;
    }

    @Query(returns => Service)
    public service(@Arg("id") id: string): Promise<Service> {
        return this.serviceRepository.getById(id, {lean: true});
    }

    @FieldResolver(returns => Car)
    async car(@Root() service: Service): Promise<Car> {
        let doc = await this.carRepository.getById(service.car_id as string, {lean: true});

        return doc;
    }

}
