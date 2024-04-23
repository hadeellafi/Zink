## Get tasks dones

Tasks are labeled with TASK: then the number that identifies the group. Every single group is done together. 
It is preferred that you finish a single full group per branch, but you can add as many groups as you get done.

**Branch out** before you create your solution. Keep the TASK: comments in place.

## Naming convention 

When creating a file, here is the naming convention to stick to as long as you can:

### Components
Inside components folder, every single module (that may be represented by a model) has a folder. Example:

- components/project
- components/task
- components/movie

Common componetns inside 
- components/common

Layouts and main master pages inside (with navigation)
- components/layouts

Only one file is mandatory: the `.ts` file. The `.html` template is also usually added, but if it is too short, i can be merged into `.ts`
The `.scss` files should be avoided until needed, and do not add `.spec` files.

With that, all component folders should be flat. No subfolders are allowed (unless the module is too complicated already).

The naming template is: 

`[filename].[component | partial].[ts | html]`

- `filename`: see rules below
- `component`: if it is a routed component (used in routes)
- `partial`: other child components
- extention: Both the `ts` and the `html` should match filename and subname.

#### File name

Use generic filenames as long as you can, here are the most common names:

- `list`: the main component to list items, like products. Routed (`list.component`)
- `details`: the detailed view of the item
- `card`: for a single item in a list. Always `partial`
- `edit` and `new`: for edit and new forms
- `form`: sometimes there is one form in module, used for both.

#### Component class name
The component Typescript name template is:

`[Major][Filename][Partial | Component]`

For example, 
- `product/list.component.ts` is: `ProductListComponent` 

- `movie/form.partial.ts` is: `MovieFormPartial` 

If the file is a common component, drop `Major`:

- `common/loader.partial.ts` is: `LoaderPartial`

#### Selectors

Routed comonents should not have any selectors. Partial components selectors template:

`[prefix]-[major]-[filename]`

For example, if prefix is set to `dm`
- `product/form.partial.ts` is `dm-product-form`
- `movie/list.partial.ts` is `dm-movie-list`

Common components, drop the `major`
- `common/loader.partial.ts` is `dm-loader`

#### Styles
Component styles should be scarce. When needed, the styles might be shared among multiple components in the same folder. 
If per file, name should match the filename only: `toast.partial.ts` for example, might have `toast.scss`. 
Common styles: `styles.scss`.

Generally use `encapsulation: ViewEncapsulation.None` when adding styles. And always know where your styles are, name them correctly to avoid bleeding. In rare cases however, bleeding is highly possible, in which case, encapsulate; `ViewEncapsulation.Emulated`.


### Services

The services folder may hold the services and the models, or it may be separated. The service that is built around a model, should have the same file name.

For example, the `Piece` service collection:
- `services/piece.service.ts` holds the service class
- `services/piece.model.ts` holds the model interface

#### Class names and interfaces

The service class should be named with the following template

`[Servicename]Service` example: `PieceService`

The model interface, should be prefixed with "I"

`I[Servicename]` example: `IPiece`

All models must be prefixed with `I`. All enums must be prefixed with `Enum` and all types must be prefixed with `T`:

```
interface IBit = {
    ...
}

type TRole = 'admin' | 'user'; ...

enum EnumStatus {
    ...
}
```

