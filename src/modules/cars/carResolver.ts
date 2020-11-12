import {Resolver, FieldResolver, Root, Query, Register, Arg, Mutation} from "@appolo/graphql";
import {define, singleton, inject} from "@appolo/inject";
import {Car} from "./car";
import {CarRepository} from "./carRepository";
import {Owner} from "../owners/owner";
import {OwnerRepository} from "../owners/ownerRepository";
import {Service} from "../services/service";
import {ServiceRepository} from "../services/serviceRepository";


@Resolver(of => Car)
@Register()
@singleton()
export class CarResolver {

    @inject() carRepository: CarRepository;
    @inject() ownerRepository: OwnerRepository;
    @inject() serviceRepository: ServiceRepository;

    @Query(returns => [Car])
    public async cars(): Promise<Car[]> {
        let {results} = await this.carRepository.getAll({lean: true});

        return results;
    }

    @Query(returns => Car)
    public car(@Arg("id") id: string) {
        return this.carRepository.getById(id, {lean: true});
    }

    @FieldResolver(returns => Owner)
    public async owner(@Root() car: Car): Promise<Owner> {
        return this.ownerRepository.getById(car.owner_id as string, {lean: true})
    }

    @FieldResolver(returns => [Service])
    public async services(@Root() car: Car) {

        let {results} = await this.serviceRepository.getAll({
            lean: true,
            filter: {car_id: car._id}
        });

        return results;
    }

    @Mutation(returns => Car)
    public async addCar(@Arg("car",{validate:{skipMissingProperties:false}}) car: Car): Promise<Car> {

        let carDoc = await this.carRepository.create(car);

        return carDoc.toJSON()
    }

    @Mutation(returns => Car)
    public async editCar(@Arg("id") id: string, @Arg("car") car: Car): Promise<Car> {

        let carDoc = await this.carRepository.updateById(id, car);

        return carDoc.toJSON()
    }
}
