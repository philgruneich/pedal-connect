# The Power Supply Object:

- **name**: The name of the power supply;
- **link**: A link to the power supply;
- **outputs**: A list of Output Configuration objects;

# The Output Configuration Object

- **quantity**: quantity of outputs with this configuration;
- **voltage**: voltage of the output. An array of voltages means the output is switchable. Defaults to 9 volts;
- **mah**: Milliamperage from this output. A map of voltage and amperage means the amperage is related to the current voltage;
- **ac**: True if the output is AC. Defaults to false (DC);
- **sag**: True if the voltage is dimmable, so any voltage can be picked from the range in the voltage array;
- **shared**: The milliamperage is shared between the outputs of the group;
- **separated**: Different outputs for each voltage option. They will usually share milliamperage.

# The Pedal Configuration Object

- **name**: name of the pedal;
- **brand**: brand of the pedal;
- **voltage**: voltage of the input. An array of voltages means the output is dynamic. Defaults to 9 volts;
- **draw**: current draw of the pedal. A map of voltage and amperage means the amperage is related to the current voltage;
- **ac**: this pedal input is AC, not DC;
- **centerPositive**: this pedal input is center positive, not center negative;
