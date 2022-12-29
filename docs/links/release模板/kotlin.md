---
title: kotlin
---
# v1.8.0

## Analysis API

- KT-50255 Analysis API: Implement standalone mode for the Analysis API

## Analysis API. FIR

- KT-54292 Symbol Light classes: implement PsiVariable.computeConstantValue for light field
- KT-54293 Analysis API: fix constructor symbol creation when its accessed via type alias

## Android

- KT-53342 TCS: New AndroidSourceSet layout for multiplatform
- KT-53013 Increase AGP compile version in KGP to 4.1.3
- KT-54013 Report error when using deprecated Kotlin Android Extensions compiler plugin
- KT-53709 MPP, Android SSL2: Conflicting warnings for androidTest/kotlin source set folder

## Backend. Native. Debug

- KT-53561 Invalid LLVM module: "inlinable function call in a function with debug info must have a !dbg location"

## Compiler

### New Features

- KT-52817 Add @JvmSerializableLambda annotation to keep old behavior of non-invokedynamic lambdas
- KT-54460 Implementation of non-local break and continue
- KT-53916 Support Xcode 14 and new Objective-C frameworks in Kotlin/Native compiler
- KT-32208 Generate method annotations into bytecode for suspend lambdas (on invokeSuspend)
- KT-53438 Introduce a way to get SourceDebugExtension attribute value via JVMTI for profiler and coverage

### Performance Improvements

- KT-53347 Get rid of excess allocations in parser
- KT-53689 JVM: Optimize equality on class literals
- KT-53119 Improve String Concatenation Lowering

### Fixes

- KT-53465 Unnecessary checkcast to array of reified type is not optimized since Kotlin 1.6.20
- KT-49658 NI: False negative TYPE_MISMATCH on nullable type with when
- KT-48162 NON_VARARG_SPREAD isn't reported on *toTypedArray() call
- KT-43493 NI: False negative: no compilation error "Operator '==' cannot be applied to 'Long' and 'Int'" is reported in
  builder inference lambdas
- KT-54393 Change in behavior from 1.7.10 to 1.7.20 for java field override.
- KT-55357 IllegalStateException when reading a class that delegates to a Java class with a definitely-not-null type
  with a flexible upper bound
- KT-55068 Kotlin Gradle DSL: No mapping for symbol: VALUE_PARAMETER SCRIPT_IMPLICIT_RECEIVER on JVM IR backend
- KT-51284 SAM conversion doesn't work if method has context receivers
- KT-48532 Remove old JVM backend
- KT-55065 Kotlin Gradle DSL: Reflection cannot find class data for lambda, produced by JVM IR backend
- KT-53270 K1: implement synthetic Enum.entries property
- KT-52823 Cannot access class Thread.State after upgrading to 1.7 from 1.6.1 using -Xjdk-release=1.8
- KT-55108 IR interpreter: Error occurred while optimizing an expression: VARARG
- KT-53547 Missing fun IrBuilderWithScope.irFunctionReference
- KT-54884 "StackOverflowError: null" caused by Enum constant name in constructor of the same Enum constant
- KT-47475 "IncompatibleClassChangeError: disagree on InnerClasses attribute": cross-module inlined WhenMappings has
  mismatched InnerClasses
- KT-55013 State checker use-after-free with XCode 14.1
- KT-54802 "VerifyError: Bad type on operand stack" for inline functions on arrays
- KT-54707 "VerifyError: Bad type on operand stack" in inline call chain on a nullable array value
- KT-48678 Coroutine debugger: disable "was optimised out" compiler feature
- KT-54745 Restore KtToken constructors without tokenId parameter to preserve back compatibility
- KT-54650 Binary incompatible ABI change in Kotlin 1.7.20
- KT-52786 Frontend / K2: IndexOutOfBoundsException when opting in to K2
- KT-54004 Builder type inference does not work correctly with variable assignment and breaks run-time
- KT-54581 JVM: "VerifyError: Bad type on operand stack" with generic inline function and when inside try-catch block
- KT-53794 IAE "Unknown visibility: protected/protected and package/" on callable reference to protected member of Java
  superclass
- KT-54600 NPE on passing nullable Kotlin lambda as Java's generic SAM interface with super type bound
- KT-54463 Delegating to a field with a platform type causes java.lang.NoSuchFieldError: value$delegate
- KT-54509 Ir Interpreter: unable to evaluate string concatenation with "this" as argument
- KT-54615 JVM: Internal error in file lowering: java.lang.AssertionError: Error occurred while optimizing an expression
- KT-53146 JVM IR: unnecessary checkcast of null leads to NoClassDefFoundError if the type isn't available at runtime
- KT-53712 Add mode to prevent generating JVM 1.8+ annotation targets (TYPE_USE, TYPE_PARAMETER)
- KT-54366 K2: no JVM BE specific diagnostics (in particular CONFLICTING_JVM_DECLARATIONS) in 1.8
- KT-35187 NullPointerException on compiling suspend inline fun with typealias to suspend function type
- KT-54275 K2: "IllegalArgumentException: KtParameter is not a subtype of class KtAnnotationEntry for factory
  REPEATED_ANNOTATION"
- KT-53656 "IllegalStateException: typeParameters == null for SimpleFunctionDescriptorImpl" with recursive generic type
  parameters
- KT-46727 Report warning on contravariant usages of star projected argument from Java
- KT-53197 K2: 'init' hides member of supertype 'UIComponent' and needs 'override' modifier
- KT-53867 K2: @JvmRecord does not compile to a java record
- KT-53964 K2 is unable to work with Java records
- KT-53349 K2: TYPE_MISMATCH caused by non-local return
- KT-54100 "Type variable TypeVariable(P) should not be fixed" crash in code with errors
- KT-54212 K2: cannot calculate implicit property type
- KT-53699 K2: Exception during IR lowering in code with coroutines
- KT-54192 Warn about unsupported feature on generic inline class parameters
- KT-53723 Friend modules aren't getting passed to cache build during box tests
- KT-53873 K2: Duplicated diagnostics reported from user type ref checkers
- KT-50909 "VerifyError: Bad type on operand stack" caused by smartcasting for nullable inline class property in class
- KT-54115 Restore Psi2IrTranslator constructor from 1.7.20
- KT-53908 K2: Self-referencing generics in Java class causes New Inference Error (IE: class Foo\<T extends Foo\>)
- KT-53193 K2: compile error on project that compiles fine with normal 1.7.10
- KT-54062 K2 Invalid serialization for type-aliased suspend function type with extension receiver
- KT-53953 Forbid usages of super or super if in fact it accesses an abstract member
- KT-47473 NI: Missed UPPER_BOUND_VIOLATED diagnostics if use type aliases with type parameters
- KT-54049 K2: false positive MANY_IMPL_MEMBER_NOT_IMPLEMENTED
- KT-30054 Wrong approximation if nullable anonymous object with implemented interface is used
- KT-53751 Postpone IgnoreNullabilityForErasedValueParameters feature
- KT-53324 Implement Enum.entries lowering on K/N
- KT-44441 K2: report redeclaration error if there is a Java class with the same name as the Kotlin class
- KT-53807 No warning about declaringClass on an enum value
- KT-53493 K2: val on function parameter counts as just warning
- KT-53435 K2: "IllegalArgumentException: class KtValueArgument is not a subtype of class KtExpression for factory
  ANNOTATION_ARGUMENT_MUST_BE_CONST" if string in nested annotation is concatenated
- KT-52927 AssertionError: LambdaKotlinCallArgumentImpl
- KT-53922 Make Enum.entries unstable feature to poison binaries
- KT-53783 Exception during psi2ir when declaring expect data object
- KT-53622 [OVERLOAD_RESOLUTION_AMBIGUITY] when enum entry called 'entries' is present in K2
- KT-41670 JVM IR: AbstractMethodError when using inheritance for fun interfaces
- KT-53178 K2: implement diagnostics for serialization plugin
- KT-53804 Restore old and incorrect logic of generating InnerClasses attributes for kotlin-stdlib
- KT-52970 Default value constant in companion object works on JVM and JS, but fails on native
- KT-51114 FIR: Support DNN checks
- KT-27936 Write InnerClasses attribute for all class names used in a class file
- KT-53719 Parsing regression on function call with type arguments and labeled lambda
- KT-53261 Evaluate effect from inline for primitive types
- KT-53706 K2: Context receivers are not resolved on properties during type resolution stage
- KT-39492 Kotlin.Metadata's packageName field cannot be an empty string
- KT-53664 Ir Interpreter: unable to evaluate name of function reference marked with JvmStatic from another module
- KT-52478 [Native] Partial linkage: Building native binary from cached KLIBs fails if one library depends on removed
  nested callable member from another one
- KT-48822 CompilationException: Back-end (JVM) Internal error: Failed to generate expression: KtProperty -
  ConcurrentModificationException
- KT-50281 IllegalStateException: unsupported call of reified inlined function
- KT-50083 Different error messages in android and JVM (Intrinsics.checkNotNullParameter).
- KT-53236 Support Enum.entries codegen on JVM/IR BE
- KT-41017 FIR: should we support smartcast after null check
- KT-53202 "ISE: Descriptor can be left only if it is last" after direct invoke optimization on a capturing lambda
- KT-46969 @BuilderInference with nested DSL scopes cause false-positive scope violation in Kotlin 1.5
- KT-53257 FIR: Improper context receiver argument is chosen when there are two extension receiver candidates
- KT-53090 Anonymous function and extension function literals are generated as classes even with -Xlambdas=indy
- KT-53208 K2: Cannot get annotation for default interface method parameter when compiled with -Xuse-k2
- KT-53184 K2: NoSuchMethodError on KProperty1.get() referenced via nullable typealias
- KT-53198 K2: Return type mismatch: expected kotlin/Unit, actual kotlin/Unit?
- KT-53100 Optimization needed: (CONSTANT_PRIMITIVE(x: T?)) => x
- KT-49875 [FIR] Support infering PRIVATE_TO_THIS visibility
- KT-53024 Refactor FIR renderer to composable architecture
- KT-50995 [FIR] Support SAM with receiver plugin
- KT-53148 K1: introduce warning for inline virtual member in enum
- KT-49847 Devirtualization fails to eliminate boxing in function reference context
- KT-52875 Extension function literal creation with -Xlambdas=indy fails with incorrect arguments
- KT-53072 INVALID_IF_AS_EXPRESSION error isn't shown in the IDE (LV 1.8)
- KT-52985 Native: a function with type T? returned a kotlin.Unit instead of null
- KT-52020 FIR warning message includes internal rendering
- KT-48778 -Xtype-enhancement-improvements-strict-mode not respecting @NonNull annotation for property accesses?

## IDE

### Fixes

- KTIJ-22357 CCE “class org.jetbrains.kotlin.fir.types.impl.FirImplicitTypeRefImpl cannot be cast to class
  org.jetbrains.kotlin.fir.types.FirResolvedTypeRef” in K2
- KT-55150 Argument for @NotNull parameter 'scope' of
  org/jetbrains/kotlin/resolve/AnnotationResolverImpl.resolveAnnotationType must not be null
- KTIJ-22165 IDE notification to promote users to migrate to the new Kotlin/JS toolchain
- KTIJ-22166 IDE notification (or something else) about JPS and Maven support for Kotlin/JS is deprecated
- KT-53543 Rework light classes for file facade
- KT-48773 Investigate the possibility of removing dependency on old JVM backend in light classes
- KTIJ-19699 IDE: False positive type mismatch in Java code for Kotlin nested class non-direct inheritor from external
  library
- KT-51101 FIR IDE: Exception on "Show Type Info" action
- KTIJ-22295 MPP, IDE: False positive UPPER_BOUND_VIOLATED when JVM module implements the generic interface from MPP
  module and the type parameter is not equal to itself.
- KT-51656 FIR IDE: ProgressCancelled exception is masked in the compiler during resolve
- KT-51315 FIR IDE: move out base modules from fe10 plugin to reuse in k2 plugin
- KTIJ-22323 K2: ISE during resolve of stdlib calls from the stdlib
- KTIJ-21391 Generate -> Override methods : don't delegate to abstract methods
- KT-53097 Extract common part of light classes to another module
- KTIJ-22354 FIR LC: annotation owner is always null
- KTIJ-22157 Kotlin call resolver leaks user code when reporting exception
  ### IDE. Completion
- KTIJ-22552 Kotlin: 'for loop' postfix completion doesn't work - "Fe10SuggestVariableNameMacro must be not requested
  from main classloader"
- KTIJ-22503 Support code completion for data objects
  ### IDE. Debugger
- KT-51755 Compilation exception with scripting compilation during debug session
- KTIJ-21963 Debugger / IR: Expression evaluation of the debugger doesn't work

### IDE. Decompiler, Indexing, Stubs

- KTIJ-22750 Initialize Kotlin stub element types lazily
- KTIJ-18094 IDE: "AssertionError: Stub count doesn't match stubbed node length" with minified Android AAR library
- KTIJ-17632 IndexOutOfBoundsException: Cannot decompile a class located in minified AAR

### IDE. Gradle Integration

- KT-48135 In the IDE import, reuse dependency granular source set KLIBs across multi-project build to avoid duplicate
  external libraries
- KTIJ-22345 False positive unresolved reference for members of subclasses of expect classes.
- KT-53514 HMPP: False positive for None of the following functions can be called with the arguments supplied. with Enum
  in common module
- KT-51583 Gradle 7.4+ | SamplesVariantRule interference: Could not resolve all files for configuration ':
  kotlinKlibCommonizerClasspath'
- KTIJ-21077 Dependency matrix does not work with Jetpack compose / multiplatform projects

### IDE. Inspections and Intentions

- KTIJ-19531 Adapt changes about new rules for method implementation requirements
- KTIJ-22087 Support IDE inspections for upcoming data objects
- KTIJ-20510 Quick fix to implement and call correct super method in case of inheritance with defaults
- KTIJ-20170 Provide quickfix for deprecated resolution to private constructor of sealed class
- KTIJ-22630 FIR IDE: Lazy resolve exception after invocation of Override members action on value class
- KT-49643 Intentions: "Implement members" fails when base type function declaration uses unresolved generic types

### IDE. JS

- KTIJ-22167 Make JS IR default in projects created by wizard
- KTIJ-22332 Wizard: Kotlin/JS projects: cssSupport DSL should be updated

### IDE. KDoc

- KTIJ-22324 K2 IDE: implement reference resolve inside KDocs

### IDE. Multiplatform

- KTIJ-19566 New Project Wizard: Update HMPP-related flags in multiplatform wizards

### IDE. Navigation

- KT-51314 FIR IDE: show Kotlin declarations in search symbol
- KTIJ-22755 Find usage for constructor from kotlin library doesn't work for secondary constructor usages

### IDE. Script

- KTIJ-22598 Add warning for standalone scripts in source roots
- KT-54325 .settings.gradle.kts and .init.gradle.kts are reported as standalone scripts

### IDE. Structural Search

- KTIJ-21986 KSSR: "CodeFragment with non-kotlin context should have fakeContextForJavaFile set: originalContext = null"
  warning shows up when replacing

### IDE. Tests Support

- KT-50269 FIR IDE: Allow running tests via gutter

### IDE. Wizards

- KTIJ-23537 Wizard: projects with Android modules require higher sdkCompileVersion
- KTIJ-23525 Wizard: Compose multiplatform: project won't build and require higher compileSdkVersion
- KTIJ-22763 New Project Wizard: remove deprecated Android extensions plugin from Android target in the project
  constructor
- KTIJ-22481 Wizard: Kotlin -> Browser application (gradle groove). Build error

## JavaScript

### Fixes

- KT-55097 KJS / IR + IC: Using an internal function from a friend module throws an unbound symbol exception
- KT-54406 Kotlin/JS: build with dependencies fails with "Could not find "kotlin" in [~/.local/share/kotlin/daemon]"
- KT-53074 Make JS IR BE default in toolchain (gradle & CLI)
- KT-50589 UTF-8 Instability in kotlin.js.map
- KT-54934 KJS / IR + IC: Suspend abstract function stubs are generated with unstable lowered ic signatures
- KT-54895 KJS / IR + IC: broken cross module references for function default param wrappers
- KT-54520 KJS / IR Allow IdSignature clashes
- KT-54120 JS IR + IC: pointless invalidation of dependent code after modifying companions
- KT-53986 KJS / IR + IC: compiler produces different JS file names with IC and without IC
- KT-54010 JS IR + IC: Force IC cache invalidation after updating language version or features
- KT-53931 KJS / Gradle: Regression with 1.7.20-RC: ReferenceError: println is not defined
- KT-53968 Kotlin/JS: no UninitializedPropertyAccessException on access to non-initialized lateinit property defined in
  dependencies
- KT-54686 KJS / IR: Incorrect generation of signatures when one of argument is nested class
- KT-54479 KJS / IR + IC: Adding or removing companion fields leads java.lang.IllegalStateException in the compiler IC
  infrastructure
- KT-54382 KJS / IR: Wrong type check for inheritors of suspend functions
- KT-54323 KJS / IR + IC: Intrinsics from stdlib may lose their dependencies in incremental rebuild
- KT-53361 KJS / IR: No debug info is generated for in-line js code
- KT-53321 Implement Enum.entries lowering on JS/IR
- KT-53112 KJS IR turn on IC infra by default
- KT-50503 Kotlin/JS: IR + IC: compileTestDevelopmentExecutableKotlinJs fails with ISE: "Could not find library" after
  removing module dependency
- KT-54011 JS IR + IC: EnumEntries don't work well when IC is enabled
- KT-53672 KJS / IR: "IndexOutOfBoundsException: Index 0 out of bounds for length 0" caused by function reference to
  extension function of reified type variable
- KT-43455 KJS: IR. Incremental compilation problem with unbound symbols
- KT-53539 KJS: Exported class inherited non-exported class shows warning
- KT-53443 KJS/IR: NullPointerException caused by anonymous objects inside lambdas
- KT-52795 K/JS and K/Native IR-validation/compilation errors for a valid kotlin code
- KT-52805 KJS/IR: Invalid call of inline function in also block
- KT-51151 KJS / IR: Wrong overloaded generic method with receiver is called
- KT-52830 KJS/IR: Sourcemap disabling doesn't work
- KT-52968 KJS / IR: Buggy generation of overridden methods
- KT-53063 KJS / IR + IC: undefined cross module reference for implemented interface functions
- KT-51099 KJS / IR + IC: Cache invalidation doesn't check generic class variance annotations (in, out)
- KT-51090 KJS / IR + IC: Cache invalidation doesn't check suspend qualifier
- KT-51088 KJS / IR + IC: Cache invalidation doesn't check class qualifiers (data, inline)
- KT-51083 KJS / IR + IC: Cache invalidation doesn't check inline function which was non inline initially
- KT-51896 KJS / IR + IC: Cache invalidation doesn't trigger rebuild for fake overridden inline functions

## Language Design

- KT-48385 Deprecate confusing grammar in when-with-subject
- KT-48516 Forbid @Synchronized annotation on suspend functions
- KT-41886 Ability to require opt-in for interface implementation, but not for usage
- KT-34943 OVERLOAD_RESOLUTION_AMBIGUITY inconsistent with the equivalent Java code
- KT-51334 Implement type-bound label this@Type

## Libraries

### New Features

- KT-21007 Provide Kotlin OSGI Bundle with extensions for JRE8 (and JRE7)
- KT-54082 Comparable and subtractible TimeMarks
- KT-52928 Provide copyToRecursively and deleteRecursively extension functions for java.nio.file.Path
- KT-49425 Update OptIn documentation to reflect latest design changes
- KT-54005 Allow calling declaringJavaClass on Enum
- KT-52933 rangeUntil members in built-in types

### Performance Improvements

- KT-53508 Cache typeOf-related KType instances when kotlin-reflect is used

### Fixes

- KT-51907 Switch JVM target of the standard libraries to 1.8
- KT-54835 Document that Iterable.all(emptyCollection) returns TRUE.
- KT-54168 Expand on natural order in comparator docs
- KT-53277 Stabilize experimental API for 1.8
- KT-53864 Review deprecations in stdlib for 1.8
- KT-47707 Remove the system property and the brittle contains optimization code itself
- KT-52336 Different behavior on JVM and Native in stringBuilder.append(charArray, 0, 1)
- KT-53927 Remove deprecation from ConcurrentModificationException constructors
- KT-53152 Introduce EnumEntries to stdlib as backing implementation of Enum.entries
- KT-53134 stdlib > object Charsets > not thread safe lazy initialization
- KT-51063 Gradle project with JPS runner: "JUnitException: Failed to parse version" JUnit runner internal error with
  JUnit
- KT-52908 Native: setUnhandledExceptionHook swallows exceptions

## Native

- KT-51043 Kotlin Native: ObjC-Interop: kotlin.ClassCastException: null cannot be cast to kotlin.Function2
- KT-50786 Native: prohibit suspend calls inside autoreleasepool {}
- KT-52834 Implement test infrastructure for K2/Native

## Native. C Export

- KT-36878 Reverse C Interop: incorrect headers generation for primitive unassigned type arrays
- KT-53599 [Reverse C Interop] Provide box/unbox API for unsigned primitive types
- KT-41904 Kotlin/Native : error: duplicate member for interface and function with the same name
- KT-42830 [Reverse C Interop] Add API to get value of boxed primitives
- KT-39496 K/N C: optional unsigned types as function parameters crash the compiler
- KT-39015 Cannot compile native library with nullable inline class

## Native. C and ObjC Import

- KT-54738 Cocoapods cinterop: linking platform.CoreGraphics package
- KT-54001 Kotlin/Native: support header exclusion in cinterop def files
- KT-53151 Native: Custom declarations in .def don't work with modules, only headers

## Native. ObjC Export

- KT-53680 Obj-C refinement annotations
- KT-54119 Native: runtime assertion failed due to missing thread state switch
- KT-42641 Don't export generated component* methods from Kotlin data classes to Obj-C header

## Native. Platform Libraries

- KT-54225 Native: update to Xcode 14.1
- KT-54164 Native: commonizer fails on CoreFoundation types
- KT-39747 Why is there no WinHttp API in Kotlin/Native's Windows API?

## Native. Runtime

- KT-49228 Kotlin/Native: Allow to unset unhandled exception hook
- KT-27305 Fix FILE macro inside RuntimeCheck and RuntimeAssert

## Native. Runtime. Memory

- KT-54498 Deprecation message of 'FreezingIsDeprecated' is not really helpful
- KT-53182 New memory manager: Unexpected memory usage on IOS

## Native. Stdlib

- KT-52429 Small Usability Improvements for Worker API

## Reflection

- KT-54629 Incorrectly cached class classifier
- KT-54611 KTypeImpl does not take into account class loader from the classifier property
- KT-48136 Make Reflection.getOrCreateKotlinPackage use cache when kotlin-reflect is used
- KT-50705 Use ClassValue to cache KClass objects in kotlin-reflect
- KT-53454 Properly cache the same class's KClass when it's loaded by multiple classloaders in getOrCreateKotlinClass

## Specification

- KT-54210 Update Kotlin specification to mention that since 1.8 generics in value classes are allowed

## Tools. CLI

- KT-54116 Add JVM target bytecode version 19
- KT-53278 Support values 6 and 8 for -Xjdk-release
- KT-46312 CLI: Kotlin runner should use platform class loader to load JDK modules on Java 9+

## Tools. Commonizer

- KT-54310 Commonizer fails on 1.8.0-dev K/N distributions
- KT-48576 [Commonizer] platform.posix.pselect not commonized in Ktor

## Tools. Compiler Plugins

- KT-46959 Kotlin Lombok: Support generated builders (@Builder)
- KT-53683 Unresolved reference compilation error occurs if a file is annotated with @ Singular and has any guava
  collection type : ImmutableTable, ImmutableList or else
- KT-53657 [K2] Unresolved reference compilation error occurs if a field is annotated with @ Singular and has type
  NavigableMap without explicit types specification
- KT-53647 [K2] Unresolved reference compilation error occurs if a field is annotated with @ Singular and has type
  Iterable\<\>
- KT-53724 Param of the @ Singular lombok annotation ignoreNullCollections=true is ignored by kotlin compiler
- KT-53451 [K2] References to methods generated by @ With lombok annotation can't be resolved with enabled K2 compiler
- KT-53721 [K2] There is no compilation error while trying to add null as a param of the field with non-null type
- KT-53370 Kotlin Lombok compiler plugin can't resolve methods generated for java boolean fields annotated with @ With
  annotation

## Tools. Compiler plugins. Serialization

- KT-54878 JVM/IR: java.lang.ClassCastException: class org.jetbrains.kotlin.ir.types.impl.IrStarProjectionImpl cannot be
  cast to class org.jetbrains.kotlin.ir.types.IrTypeProjection on serializer\<Box\<*\>\>()
- KT-55340 Argument for kotlinx.serialization.UseSerializers does not implement KSerializer or does not provide
  serializer for concrete type
- KT-55296 Improve exceptions in serialization plugin
- KT-55180 KJS: regression in serialization for Kotlin 1.8.0-beta
- KT-53157 Recursion detected in a lazy value under LockBasedStorageManager in kotlinx.serialization
- KT-54297 Regression in serializable classes with star projections
- KT-49660 kotlinx.serialization: IndexOutOfBoundsException for parameterized sealed class
- KT-43910 JS IR: Serialization with base class: "IndexOutOfBoundsException: Index 0 out of bounds for length 0"

## Tools. Daemon

- KT-52622 Kotlin/JS, Kotlin/Common compilations start Kotlin daemon incompatible with Kotlin/JVM compilation on JDK 8

## Tools. Gradle

### New Features

- KT-27301 Expose compiler flags via Gradle lazy properties
- KT-53357 Change single build metrics property
- KT-50673 Gradle: KotlinCompile task(s) should use @NormalizeLineEndings
- KT-34464 Kotlin build report path not clickable in the IDE

### Performance Improvements

- KT-51525 [Gradle] Optimize evaluating args for compile tasks
- KT-52520 Remove usage of reflection from CompilerArgumentsGradleInput

### Fixes

- KT-48843 Add ability to disable Kotlin daemon fallback strategy
- KT-55334 kaptGenerateStubs passes wrong android variant module names to compiler
- KT-55255 Gradle: stdlib version alignment fails build on dynamic stdlib version.
- KT-55363 [K1.8.0-Beta] Command line parsing treats plugin parameters as source files
- KT-54993 Raise kotlin.jvm.target.validation.mode check default level to error when build is running on Gradle 8+
- KT-54136 Duplicated classes cause build failure if a dependency to kotlin-stdlib specified in an android project
- KT-50115 Setting toolchain via Java extension does not configure 'kotlinOptions.jvmTarget' value when Kotlin
  compilation tasks are created eagerly
- KT-55222 Migrate AndroidDependencyResolver to the new Gradle API
- KT-55119 There is no validation for different jvmTarget and targetCompatibility values in multiplatform projects with
  jvm target and used java sources
- KT-55102 Compile java task fails with different target version in pure kotlin project
- KT-54995 [1.8.0-Beta] compileAppleMainKotlinMetadata fails on default parameters with No value passed for parameter '
  mustExist'
- KT-35003 Automatically set targetCompatibility for kotlin-jvm projects to work with gradle 6 metadata
- KT-45335 kotlinOptions.jvmTarget conflicts with Gradle variants
- KT-48798 Android: going from one to more than one productFlavor causes inputs of commonSourceSet$kotlin_gradle_plugin
  property of compileKotlin task to change
- KT-55019 Gradle sync: UnknownConfigurationException when adding implementation dependencies to a Kotlin with Java
  compilation
- KT-55004 jvmTarget value is ignored by depending modules if a task "UsesKotlinJavaToolchain" is configured for all
  project modules using allProjects {}
- KT-54888 Add Gradle property to suppress kotlinOptions.freeCompilerArgs modification on execution phase
- KT-54399 Undeprecate 'kotlinOptions' DSL
- KT-54306 Change the naming of newly added Compiler*Options classes and interfaces
- KT-54580 KotlinOptions in AbstractKotlinCompilation class are deprecated
- KT-54653 java.lang.NoClassDefFoundError: kotlin/jdk7/AutoCloseableKt exception if a dependency to the kotlin-stdlib is
  added
- KT-52624 Compatibility with Gradle 7.3 release
- KT-54703 Stdlib substitution does not work with JPMS modules
- KT-54602 Prevent leaking Gradle Compile DSL types into compiler cli runtime
- KT-54439 Project failed to sync Native LaguageSettings to compiler options in afterEvaluate
- KT-53885 Bump minimal supported Gradle version to 6.8.3
- KT-53773 Protect and system properties can contain sensitive data
- KT-53732 Add custom values limits for build scan reports
- KT-52623 Compatibility with Gradle 7.2. release
- KT-51831 Gradle: remove kotlin.compiler.execution.strategy system property
- KT-51679 Change deprecation level to error for KotlinCompile setClasspath/getClasspath methods
- KT-54335 Kotlin build report configuration. There is no validation for SINGLE_FILE output if the required
  kotlin.build.report.single_file property is empty or absent
- KT-54356 Kotlin build report configuration. Wrong path is used for the property
  kotlin.internal.single.build.metrics.file
- KT-53617 KotlinCompilerExecutionStrategy value is ignored by depending modules if configure once for all project
  modules using allProjects {}
- KT-53823 Kotlin Gradle Plugin uses deprecated Gradle API: Provider.forUseAtConfigurationTime()
- KT-54142 Increase Kotlin Gradle plugin Gradle target API to 7.5
- KT-50161 Android variant filter breaks KotlinCompile cache compatibility
- KT-54113 LanguageSettings to KotlinNativeLink.toolOptions sync are executed on the wrong context
- KT-53830 Versions of kotlin-stdlib-jdk8 and kotlin-stdlib-jdk7 aren't overrided if added as transitive dependencies to
  kotlin-stdlib
- KT-54112 Missing target input on KotlinNativeLink task
- KT-45879 Documentation: Wrong kotlin languageVersion "1.6 (EXPERIMENTAL)"
- KT-54103 Remove JvmTarget.JVM_1_6 from generated Gradle compiler type
- KT-52959 KMP code is breaking Gradle project isolation
- KT-50598 MULTIPLE_KOTLIN_PLUGINS_SPECIFIC_PROJECTS_WARNING is only shown on first build
- KT-53246 Gradle: Special characters in paths of errors and warnings should be escaped
- KT-47730 How to avoid stdlib coming from Kotlin gradle plugin
- KT-52209 Corrupted cache and non-incremental build if produce caches "in process" and restore then compiling with
  kotlin daemon
- KT-41642 "TaskDependencyResolveException: Could not determine the dependencies" when trying to apply stdlib
- KT-53390 Drop usage of -Xjava-source-roots when passing java sources required for Kotlin compilation
- KT-52984 Kotlin Gradle plugin is misbehaving by resolving DomainObjectCollection early
- KT-38622 Non-incremental compilation because of R.jar with Android Gradle plugin 3.6
- KT-38576 AnalysisResult.RetryWithAdditionalRoots crashes during incremental compilation with java classes in classpath

## Tools. Gradle. Cocoapods

- KT-54314 Cocoapods: Signing pod dependency for Xcode 14
- KT-54060 Xcode 14: disable bitcode embedding for Apple frameworks
- KT-53340 Change default linking type for frameworks registered by cocoapods plugin
- KT-53392 Deprecate and delete downloading pod dependencies by direct link
- KT-53695 Build of macOS application fails if a framework is integrated via Cocoapods plugin

## Tools. Gradle. JS

- KT-53367 KJS: Migrate cssSupport API
- KT-45789 KJS / IR: Transitive NPM dependencies are not included in PublicPackageJsonTask output
- KT-55099 K/JS: Second declaration of JS target without compiler type report warning incorrectly
- KT-52951 [KGP/JS] Browser test target registration via properties
- KT-52950 KJS: Report if yarn.lock was updated during built
- KT-53374 KJS / Gradle: Implement IDEA sync detection logic via ValueSource to improve configuration cache support
- KT-53381 Kotlin/JS: with erased kotlin-js-store/ and reportNewYarnLock = true the task kotlinUpgradeYarnLock always
  fails
- KT-53788 KJS / Gradle: Disable Gradle build cache for KotlinJsDce when development mode is enabled
- KT-53614 Kotlin/JS upgrade npm dependencies

## Tools. Gradle. Multiplatform

### New Features

- KT-53396 Support 'implementation platform()' by gradle kotlin mpp plugin for JVM target
- KT-40489 MPP / Gradle: support BOM (enforcedPlatform) artifacts in source set dependencies DSL

### Performance Improvements

- KT-52726 [MPP] Optimize caching/performance/call-sites of 'compilationsBySourceSets'

### Fixes

- KT-54634 MPP: Test Failure causes: KotlinJvmTest$Executor$execute$1 does not define failure
- KT-35916 Gradle MPP plugin: Configurations for a main compilation and its default source set have different naming
- KT-46960 Repeated kotlin/native external libraries in project
- KT-27292 MPP: jvm { withJava() }: Gradle build: Java source under Kotlin root is resolved while building, but does not
  produce output class files
- KT-34650 Naming clash in MPP+Android: androidTest vs androidAndroidTest
- KT-54387 Remove MPP alpha stability warning
- KT-31468 Targets disambiguation doesn't work if a depending multiplatform module uses withJava() mode
- KT-54090 Take an Apple test device from the device list
- KT-54301 KotlinToolingVersionOrNull: IllegalArgumentException
- KT-53256 Implement K/N compiler downloading for KPM
- KT-45412 KotlinCompilation: Make sure .kotlinSourceSets and .allKotlinSourceSets include the default source set
- KT-49202 Tests on android target can't be executed in multiplatform project if dependency to kotlin-test framework is
  provided as a single dependency and tests configured to be executed via Junit5

## Tools. Gradle. Native

### New Features

- KT-43293 Support Gradle configuration caching with Kotlin/Native
- KT-53107 Add arm64 support for watchOS targets (Xcode 14)

### Fixes

- KT-53704 Native cinterop: eager header path calculation
- KT-54814 Kotlin/Native: Github Actions: Testing watchOSX64 with Xcode 14 — Invalid device: Apple Watch Series 5
- KT-54627 Native: :commonizeNativeDistribution with configuration cache enabled fails even when set to warn on JDK 17
- KT-54339 Link tasks fail if Gradle Configuration Cache is enabled
- KT-53191 Native cinterop sync problem with gradle
- KT-54583 watchosDeviceArm64 target shouldn't register test tasks
- KT-52303 Gradle / Native: Build tasks ignore project.buildDir
- KT-54442 Gradle iOS test tasks fail if a device is not selected explicitly
- KT-54177 Gradle: Deprecate enableEndorsedLibs flag
- KT-47355 Support macos target for FatFramework task
- KT-53339 MPP / CocoaPods: The static framework fails to install on a real iOS device
- KT-31573 Missing description for Native Gradle tasks
- KT-53131 Gradle Sync: "NoSuchElementException: Array contains no element matching the predicate" with CocoaPods
- KT-53686 Task assembleReleaseXCFramework fails with "error: the path does not point to a valid framework" if project
  name contains a dash

## Tools. Incremental Compile

- KT-54144 New IC: "IllegalStateException: The following LookupSymbols are not yet converted to ProgramSymbols" when
  changing an inline function with custom JvmName
- KT-53871 New IC: "IllegalStateException: The following LookupSymbols are not yet converted to ProgramSymbols" when
  changing an inline property accessor
- KT-19804 Relocatable IC caches

## Tools. JPS

- KT-45474 False positive NO_ELSE_IN_WHEN on sealed class with incremental compilation
- KT-54228 Switching abstract to sealed classes causes incremental issue
- KT-38483 JPS: Stopping compilation causes IDE CompilationCanceledException
- KT-50310 False positive NO_ELSE_IN_WHEN on incremental build when adding sealed classes
- KT-48813 Move cache version to compiler
- KTIJ-921 JPS: FileNotFoundException on project build in mixed Kotlin/Scala project

## Tools. Kapt

- KT-54187 JVM IR + kapt: incorrect modifier final is generated for nested enum in interface
- KT-48827 Remove 'kapt.use.worker.api' property

## Tools. Scripts

- KT-54355 Scripts: Internal compiler error (languageVersion=1.9)
- KT-53009 Scripting: NDFDE “Descriptor wasn't found for declaration SCRIPT” on using script definition with kotlin from
  master